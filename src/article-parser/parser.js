import puppeteer from "puppeteer";
import articles from "./articles.json" assert { type: "json" };
import fs from "fs";

// THIS parses a link of an article and then stores it inside article.json.
// TO RUN simply call the function on the cmd
// @NOTE:
// 1. this only works for Nature World News but can easily be modified to work on other websites
// 2. updateAll should be refactored to work based on targetAtATime.
// 3. scraping 200 articles takes at most 10 mins
// 4. adjust the parameters according to computer specs

const targetAtATime = 25; // Target at a time before browser dies and rets
const batches = 5;        // Number of opened pages at a time

const update = async (url, genre) => {
    if (!(url in articles[genre])) return;
    try {
        await readArticles(url, genre);
        console.log("Article successfully updated: " + url);
        save();
    } catch (err) {
        console.log("Update Failed");
        console.log(err);
        save();
    }
}

const updateEmpty = async () => {
    let current = 0;
    let list = []
    for (let genre in articles) {
        for (let url in articles[genre]){
            if (Object.keys(articles[genre][url]).length === 0){
                list.push(url); 
                current++;
                if (list.length == targetAtATime){
                    try {
                        await readArticles(list, genre);
                        console.log("Articles successfully updated");
                        console.log("Articles updated so far:" + current + "articles were scraped");
                        list = [];
                        save();
                    } catch (err) {
                        console.log("Update Failed");
                        console.log(err);
                        save();
                    }
                }
            }
        }

        try {
            await readArticles(list, genre);
            console.log("Articles successfully updated");
            console.log("Articles updated so far:" + current + "articles were scraped");
            save();
        } catch (err) {
            console.log("Update Failed");
            console.log(err);
            save();
        }
    }
}

const updateAll = async () => {
    for (let genre in articles) {
        const list = [];
        for (let url in articles[genre]) list.push(url);

        try {
            await readArticles(list, genre);
            console.log("Articles successfully updated");
            save();
        } catch (err) {
            console.log("Update Failed");
            console.log(err);
            save();
        }
    }
}

// HELPER FUNCTIONS
function save() {
    fs.writeFile("./src/article-parser/articles.json", JSON.stringify(articles, null, 2), err => {
        if (err) console.log("Saving articles failed");
        else console.log("Saving articles successful");
    })
};

const readArticles = async (urls, genre) => {
    const browser = await puppeteer.launch({ headless: false});
    
    try {
        const n = urls.length;

        for (let i = 0; i < n; i += batches) {
            const end = Math.min(i + batches, n);

            await Promise.all(
                urls.slice(i, end).map(url => readArticle(url, genre, browser))
            );
        }

        await browser.close();
    } catch (error) {
        console.error("Error while parsing links:", error);
        await browser.close();
    }
};

const readArticle = async (url, genre, browser) => {
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: "60000" });
    } 
    catch {
        let reload = 5;
        while (reload-- > 0){
            try{
                await page.reload();
                break;
            }
            catch{
                if (reload == 0){
                    await page.close();
                    consle.log("failed to reach page. Exiting");
                }
                
                console.log("failed reloading, trying again");
            }
        }
    }

    await page.waitForSelector('.article-header');
    await page.waitForSelector('#articlebox');

    const [headline, summary, image, date] = await page.evaluate(() => {
        const div = document.getElementsByClassName("article-header");
        const content = document.getElementById("articlebox");
        const imgElement = document.querySelector('img');

        return [
            div[0].querySelector('h1').textContent,
            content.querySelector('p').textContent,
            imgElement ? imgElement.getAttribute('src') : '',
            document.querySelector('time').textContent
        ];
    });
    
    console.log("article read");
    articles[genre][url] = { headline, summary, image, date };
    await page.close();
}

// CMD functions
const functionName = process.argv[2];
const url = process.argv[3];

switch (functionName) {
    case 'update':
        update(url);
        break;
    case 'updateEmpty':
        updateEmpty();
        break;
    case 'updateAll':
        updateAll();
        break;
    default:
        console.log('Invalid function name.');
}
