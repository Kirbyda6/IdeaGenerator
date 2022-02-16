import * as ideas from './ideaModel.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

app.post('/ideas', (req, res) => {
    ideas.createIdea(req.body.idea, req.body.votes, req.body.creator, req.body.details)
    .then(idea => {
        res.status(201).json(idea);
    })
    .catch(error => {
        console.error(error);
        // In case of an error, send back status code in case of an error.
        res.status(500).json({ Error: error });
    });
});

app.post('/users', (req, res) => {
    ideas.createUser(req.body.name, req.body.ideaCollection)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        console.error(error);
        // In case of an error, send back status code in case of an error.
        res.status(500).json({ Error: error });
    });
});

app.get('/ideas', (req, res) => {
    ideas.findIdea({}, '', 0)
    .then(idea => {
        res.status(200).json(idea);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: error });
    });
});

app.get('/idea', (req, res) => {
    ideas.findRandIdea()
    .then(idea => {
        res.status(200).json(idea);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: error });
    });
});

app.get('/users', (req, res) => {
    ideas.findUser({}, '', 0)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: error });
    });
});

app.put('/ideas/:_id', (req, res) => {
    ideas.updateIdea(req.params, req.body)
    .then(idea => {
        res.status(200).json(idea);
    })
    .catch(error => {
        res.status(500).json({ Error: error });
    })
});

app.put('/users/:_id', (req, res) => {
    ideas.updateUser(req.params, req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({ Error: error });
    })
});

app.delete('/ideas/:_id', (req, res) => {
    console.log(req.params)
    ideas.deleteIdeas(req.params)
    .then(idea => {
        res.status(200).json(idea);
    })
    .catch(error => {
        res.status(500).json({ Error: error });
    })
});

app.delete('/users/:_id', (req, res) => {
    console.log(req.params)
    ideas.deleteUsers(req.params)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({ Error: error });
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});