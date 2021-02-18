const puppeteer = require('puppeteer');
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');


function createPages(n) {
  const pages = []
  for (let i = 0; i< n; i++) {
    pages.push('https://www.baidu.com/')
  }
  return pages
}

// 处理的任务列表
const pageArrays = createPages(10);

(async () => {
  const browser = await puppeteer.launch(
    {
      /*
      * headless false 启动流程：打开
      * 1、打开chromium
      * 2、新开一个tab
      * 3、打开https://www.baidu.com网页
      * 4、截图导出 baidu.jpg
      * 5、关闭tab叶、退出chromium
      * */
      headless: true,   //有浏览器界面启动
      // slowMo: 100,       //放慢浏览器执行速度，方便测试观察
      args: [
        // 部分功能禁用：GPU、SandBox、插件等，减少内存的使用和相关计算
        // "--disable-gpu",
        // "--disable-dev-shm-usage",
        // "--disable-setuid-sandbox",
        // "--no-first-run",
        // "--no-sandbox",
        // "--no-zygote",
        // "--single-process", // 将dom解析和渲染放到同一进程中，避免进程上下文的切换

        '–no-sandbox',
        '--window-size=1280,960'
      ],
    });

  const createPage = async (url) => {
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: `file${Math.random()}.png` });
    return await page.close();
  }

  const parallel = async () => {
    performance.mark('Promise 并行 start')
    await Promise.all(pageArrays.map(createPage))
    performance.mark('Promise 并行 end')
    performance.measure('Promise 并行', 'Promise 并行 start', 'Promise 并行 end');
    console.log('parallel 时间消耗:', performance.nodeTiming)
  }
  // await parallel()

  const serialPromises = (promises) => {
    return promises.reduce((prev, next) => prev.then(() => next), Promise.resolve());
  }
  const serial = async () => {
    performance.mark('Promise 串行 start')
    const promiseArray = pageArrays.map(createPage)

    console.log('promiseArray:', promiseArray);

    await serialPromises(promiseArray);

    performance.mark('Promise 串行 end')
    performance.measure('Promise 串行', 'Promise 串行 start', 'Promise 串行 end');
    console.log('serial 时间消耗:', performance.nodeTiming)
  }
  await serial()

  // 1、开启界面浏览器：duration: 9184.993179991841,
  // 2、headless: true： duration: 4398.5684600025415 duration: 3409.439466997981,
  // 3、 duration: 2618.3380370140076,
  // const page = await browser.newPage();
  // await page.goto('https://www.baidu.com');
  // await page.screenshot({ path: "baidu.png" });
  // await page.close();
  await browser.close();
})();

