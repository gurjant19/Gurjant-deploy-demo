using System;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace EntryPoint
{
    class EntryPoint
    {
        static void Main()
        {
            string url = "http://testing.todvachev.com/selectors/name/";
            IWebDriver driver = new ChromeDriver("/Users/gurjantsingh/Downloads");

            driver.Navigate().GoToUrl(url);

            IWebElement element = driver.FindElement(By.Name("myName"));

            if (element.Displayed)
            {
                GreenMessage("Yes I CAN SEE THE ELEMENT");
            }
            else
            {
                RedMessage("Something Went Wrong");
            }

            driver.Quit();
        }

        private static void RedMessage(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.Black;
        }

        private static void GreenMessage(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.Black;
        }
    }
}
