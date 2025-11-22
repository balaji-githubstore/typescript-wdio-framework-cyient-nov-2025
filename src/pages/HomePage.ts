import { BasePage } from "./BasePage"

class HomePage extends BasePage
{
    //Properties for handling the elements
    get signInElement(){
        return  driver.$("//*[@text='Sign in' or @name='Sign in']")
    }
    get exploreElement(){
        return  driver.$("//*[@text='Explore']")
    }
    get bookMarkElement(){
        return  driver.$("//*[@text='Bookmarks']")
    }

    get readyToStartLearningElement()
    {
        return driver.$("//*[contains(@text,'Ready to start')]")
    }

    async isSignInDisplayed():Promise<boolean>
    {
       return await this.isDisplayed(await this.signInElement);
    }

    async clickOnExplore():Promise<void>{
        // await this.exploreElement.click();
        await this.clickOnElement(await this.exploreElement);
    }

    async clickOnBookmark():Promise<void>{
        await this.bookMarkElement.click();
    }

    //create property for readyToStartLeaningElement
    //*[contains(@text,'Ready to start')]
    async getReadyToStartlearningText():Promise<string>
    {
        // return await this.readyToStartLearningElement.getAttribute("text")
        return await this.getAttribute(await this.readyToStartLearningElement,"text")
    }



}

export default new HomePage();
