const express = require('express');

const server = express();

server.use(express.json());


var nTotalReq = 0;


// Lista de projetos
const projects = [
    {
        id: "0",
        title: "Project 00",
        tasks: []
    },
    {
        id: "1",
        title: "Project 01",
        tasks: ["Nova tarefa"]
    },
    {
        id: "2",
        title: "Project 02",
        tasks: ["Nova tarefa"]
    },
    {
        id: "3",
        title: "Project 03",
        tasks: ["Nova tarefa"]
    },
    {
        id: "4",
        title: "Project 04",
        tasks: ["Nova tarefa"]
    },
    {
        id: "5",
        title: "Project 05",
        tasks: ["Nova tarefa"]
    }
];

// Middleware nTotalReq
server.use((req, res, next) => {
    nTotalReq++;
    console.log('\n');
    console.log(`All request: ${nTotalReq}`, '\n');
    console.time('Request');
    console.log(`Method: ${req.method}; \n\nURL: ${req.url}`, '\n');

    next();

    console.timeEnd('Request');
    console.log('\n');
});

// Middleware checkId
function checkId(req, res, next) {
    const { id } = req.params;

    req.proId = -1;
    projects.forEach((element, index) => {
        if (element.id == id) {
            req.proId = index;
        }
    });

    if (req.proId <0 ) {
        return res.status(400).json({ error: 'Id does not exists' });
    }

    return next();
}

// Inserindo projetos
server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    projects.push(
        {
            id, 
            title, 
            tasks: ["Nova Tarefa"]
        }
    );

    return res.json(projects);
});

// Lendos a lista de projetos
server.get('/projects', (req, res) =>{
    return res.json(projects);
});

// Listar apenas um projeto
server.get('/projects/:id', checkId, (req, res) => {
    const { id } = req.params;

    return res.json(projects[id]);
});

// Editar o título do projeto
server.put('/projects/:id', checkId, (req, res) => {
    const { title } = req.body;

    projects[req.proId].title = title;

    return res.json(projects);
});

// Inserindo tarefas (tasks) no projeto
server.put('/projects/:id/tasks', checkId, (req, res) => {
    const { tasks } = req.body;

    projects[req.proId].tasks.splice(req.tasks, 1);

    projects[req.proId].tasks = tasks;

    return res.json(projects);
});

// Editando uma tarefa (tasks) no projeto
server.put('/projects/:id/tasks', checkId, (req, res) => {
    const { tasks } = req.body;

    projects[req.proId].tasks = tasks;

    return res.json(projects);
});

// Apagar tarefas (tasks) no projeto
server.delete('/projects/:id/tasks', checkId, (req, res) => {
    //  const { id } = req.params;
      const { tasks } = req.body;
  
      projects[req.proId].tasks.splice(req.tasks, 1);
      
      return res.send('Success...');
  });

// Apagar um projeto 
server.delete('/projects/:id', checkId, (req, res) => {
    projects.splice(req.proId, 1);

    return res.send('Success...');
});



server.listen(3000);
