import { TestData } from "../../src/constants/TestConstant";
import HomePage from "../../src/pages/HomePage";

describe('home_suite',()=>{

    it('should view sign in screen',async ():Promise<void> =>{
        expect(await HomePage.isSignInDisplayed()).toBe(true)
    })

    it('should view ready to learning text',async ():Promise<void> =>{
        //assertion should be present under test
        expect(await HomePage.getReadyToStartlearningText()).toContain(TestData.readyToLearnExpectedValue)
        // TestData.users.invalidUser.username

    })

it('should view ready to learning text2',async ():Promise<void> =>{
        //assertion should be present under test
        expect(await HomePage.getReadyToStartlearningText()).toContain(TestData.readyToLearnExpectedValue)
        // TestData.users.invalidUser.username

    })
})