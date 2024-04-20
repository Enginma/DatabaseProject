import Card2 from '../Cards2/cards2';

export default function BotPage(props) {
    return (
        <div>
            {props.games.map((game) => <Card2 key = {game.id} game = {game}/>)}
        </div>
    )
}
