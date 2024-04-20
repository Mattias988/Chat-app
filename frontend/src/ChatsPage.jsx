import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='cca1ec5c-a0d2-4319-8d32-bb473f37ae09'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
}

export default ChatsPage