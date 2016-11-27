describe("Message", function() {
    const author = "Author";
    const content = "Hello, world!";

    it("should have a timestamp if passed in", function() {
        let m = new Message(author, content, new Date());
        expect(m.timestamp).not.toBe(null);
    });
    
    it("should have a timestamp without being passed in", function() {
        let m = new Message(author, content);
        expect(m.timestamp).not.toBe(null);
    });

    it("should have a proper toString", function() {
        let m = new Message(author, content);
        expect(m.toString()).toBe(`${author} : ${content}`);    
    });
});