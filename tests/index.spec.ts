import {domain} from "@domain/index";

describe("Test suite", () => {
    it("Should execute", () => {
        expect(domain()).toEqual("domaininfrastructure");
    })
})