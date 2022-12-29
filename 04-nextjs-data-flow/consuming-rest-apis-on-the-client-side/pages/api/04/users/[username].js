import path from 'path';
import { promises as fs } from 'fs';

export default async (req, res) => {
    const {
        query: {username}
    } = req;
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
    const users = JSON.parse(fileContents);
    let targetUser = null;
    users.forEach((user) => {
        if(user.username === username) {
            targetUser = user
        }
    })
    if(targetUser) {
        res.status(200).json(targetUser)
    } else {
        res.status(404).json({notFound:true})
    }
}