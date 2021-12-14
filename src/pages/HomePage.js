import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Bioróżnorodność, a komu to potrzebne?",
        author: "Jan Zdziwiony",
        text: "Dla niektórych na świecie powynny żyć tylko te rośliny i zwierzęta, które lądują na jego talerzu. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"
    },
    {
        id: 2,
        title: "Uciążliwa, lecz konieczna segregacja odpadów",
        author: "Ryś Recyklingowy",
        text: "Afryka jest dziś wzorem dla świata, nie z własnej chęci, lecz z konieczności. Będąc ogólnoziemskim składowiskiem odpadów, musiała nauczyć się z nich korzystać, czego nie umiemy my.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    },
    {
        id: 3,
        title: "Jaki będzie koniec świata?",
        author: "Rafał Zatroskany",
        text: "Nie odejdziemy w blasku kosmicznych fleszy. Koniec będzie znacznie bardziej przyziemny, bo wykończy nas to, co otacza nas od lat i ma destrukcyjny wpływ na nasz organizm, choć nie dostrzegamy zabójcy w wodzie i w powietrzu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;