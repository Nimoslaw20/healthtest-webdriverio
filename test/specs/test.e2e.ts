import mediPage from "../pageobjects/medi.page.ts";


before("Before action", ()=>{
  console.log("Start login process")
})
describe("Mediboard login", () => {
    it("tests Mediboard login", async () => {
      await mediPage.open()
    
      console.log("passed open")
      await mediPage.verifyUrl()
      console.log("passed verify")
      await mediPage.agreeToTerms()
      console.log("passed terms")
      await mediPage.login(process.env.EMAIL,  process.env.PASSWORD);
      await mediPage.verifyOtp()
      await mediPage.getGeneralOverviewText();
    });
  });

  after("Finish action", ()=>{
    console.log("Start login process")
  })


  //command to run: npx wdio run ./wdio.conf.js
  // or if configures in package.json: npm test

