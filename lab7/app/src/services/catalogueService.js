class CatalogueService{

    static async getItems(){
        return [
            {
                image: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
                name: "Apple",
                price: 25,
            },
            {
                image: "https://media.istockphoto.com/id/818448802/photo/peach-with-leaf-full-depth-of-field.jpg?s=170667a&w=0&k=20&c=f3BsiHmdf8Psdez-X4a0e6tQbnjuH_3eLL3mEMfYUak=",
                name: "Peach",
                price: 22,
            },
            {
                image: "https://media.istockphoto.com/id/803721418/photo/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=-jAJlO3WbgFzxwwSmG3pc7bqUva117TYUKKrQW3-RK8=",
                name: "Grapes",
                price: 50,
            },
            {
                image: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
                name: "Orange",
                price: 23,
            },
            {
                image: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=",
                name: "Banana",
                price: 25,
            },
            {
                image: "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=612x612&w=0&k=20&c=QtfdAhdeIGpR3JUNDmYFo6cN0el8oYMcOXMQI7Qder4=",
                name: "Chicken",
                price: 40,
            },
            {
                image: "https://media.istockphoto.com/id/482728017/photo/kiwi.jpg?s=612x612&w=0&k=20&c=bBHFCNDXhcD2zRc6YmkrZu6ytTwMUeSRRdM1VVc1Dog=",
                name: "Kiwi",
                price: 10,
            }
        ]
    }
}

module.exports = CatalogueService;