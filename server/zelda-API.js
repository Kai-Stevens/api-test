const fetchZelda = async (beastIndex) => {
    try {
        // Grab the first 10 games in the Remote API
        const response = await fetch("https://zelda.fanapis.com/api/games?limit=10");
        const zeldaAllData = await response.json();
        let zeldaData = zeldaAllData["data"];
        // The ID's were weird, so I just set them from 0 - object-length
        zeldaData.forEach((game, index) => {
            game["id"] = index;
        });
        return zeldaData;
    } catch(e) {
        console.log(e);
    }
}

//const zeldaData = fetchZelda();
module.exports = fetchZelda;

/* Example data:
{
    name: 'The Legend of Zelda: Twilight Princess',
    description: 'The Legend of Zelda: Twilight Princess is the thirteenth main installment 
        of The Legend of Zelda series, released for both the Nintendo GameCube and Wii. 
        It was highly anticipated by many members of the gaming community 
        and was regarded as finally fulfilling the dreams of those who 
        wanted a much more realistic and mature Zelda game, as seen in the 
        SpaceWorld 2000 GameCube Tech Demo. This is the first Zelda game t
        o be rated T by ESRB and 12+ by PEGI. The reason is probably 
        because of violence, blood , and signs of nudity . This game is also notable 
        for being the first console Zelda title released in the United States before Japan, 
        as the Wii version was released in America on November 19, 2006, whereas the 
        Japanese versions were released on December 2. Because of this, Twilight Princess 
        was one of the launch titles for the Wii alongside Wii Sports in the United States. ',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
    released_date: ' November 19, 2006',
    id: 8
  },
*/