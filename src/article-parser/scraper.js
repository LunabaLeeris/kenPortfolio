import puppeteer from "puppeteer";
import articles from "./articles.json" assert { type: "json" };
import fs from "fs";

// This scrapes my brother's original website hoster and retrieves all the article links
// NOTE: This will soon be deprecated because ideally the website will be down because this will 
//       be used as the primary website. 

async function scrapeAll(){
    const browser = await puppeteer.launch({headless: false});

    try {
        await Promise.all(
            [
                scrape(browser, "Weather &  Disasters"),
                scrape(browser, "Environment"),
                scrape(browser, "Space & Ancient Times"),
                scrape(browser, "Health"),
                scrape(browser, "Wildlife & Animals")
            ]
        );

        await browser.close();
    } catch (error) {
        console.error("Error while parsing links:", error);
        await browser.close();
    }
}

async function scrape(browser, src){
    const trimmed = src.trim(); 
    const genre = trimmed.replace(/\s+/g, ' '); 

    const page = await browser.newPage();

    await page.goto("https://www.kenlunaba.com/?key=024e7d0b3b9a47099ce772f9094e0494d3bf388413cde3bc6c906c7e",
                     {waitUntil: "domcontentloaded"});

    const nav = await page.waitForSelector('div .navicon');
    await nav.click();
    await page.waitForSelector(`div.menu-list > a::-p-text(${src})`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.click(`div.menu-list > a::-p-text(${src})`);

    const check = async () => {
        await page.waitForSelector("div .header");

        while (true){
            let prevH = await page.evaluate("document.body.scrollHeight");
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
            try{
                await page.waitForFunction(`document.body.scrollHeight > ${prevH}`, {timeout: 3000});
            }
            catch (err) {
                break;
            }
        }
    }

    await check();
    const anchors = await page.evaluate(() => {
        const tag = Array.from(document.querySelectorAll("article > a"));
        return tag.map((t) => t.href);
    });

    for (let i = 0; i < anchors.length; i++){
            const a = anchors[i];
            if (articles[genre].hasOwnProperty(a)) continue;

            articles[genre][a] = {};
    }

    save();
    page.close();
}

// HELPER FUNCTIONS
function save() {
    fs.writeFile("./src/article-parser/articles.json", JSON.stringify(articles, null, 2), err => {
        if (err) console.log("Saving articles failed");
        else console.log("Saving articles successful");
    })
};

await scrapeAll();
