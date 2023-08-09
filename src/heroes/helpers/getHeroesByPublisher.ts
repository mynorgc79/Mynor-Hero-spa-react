
import { Hero } from "../interfaces"
import { heroes } from "../data";

export const getHeroesByPublisher = (publisher: string): Hero[] => {
    const validPublishers: string[] =['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error (`publisher ${publisher} is not valid`);
    }

    return heroes.filter((hero)=> hero.publisher === publisher);

}