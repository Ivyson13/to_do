# To-Do List Application

Esta é uma aplicação simples de lista de tarefas (To-Do List) construída com React para o frontend e Node.js para o backend. O backend utiliza uma API RESTful para gerenciar tarefas, que são armazenadas em um banco de dados PostgreSQL.

## Funcionalidades

- Adicionar uma nova tarefa
- Marcar uma tarefa como concluída
- Excluir uma tarefa

## Tecnologias Utilizadas

- Frontend: React
- Backend: Node.js
- Banco de Dados: PostgreSQL
- Containerização: Docker
- Orquestração de Contêineres: Kubernetes
- Gerenciamento de Dependências: Docker Compose

## Como Executar a Aplicação

### Pré-requisitos

- Docker
- Docker Compose
- Kubernetes (Minikube ou outro)

### Executando com Docker Compose

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Configure as variáveis de ambiente no arquivo `.env` para o backend:
    ```env
    DATABASE_URL=postgresql://user:password@database:5432/todolist
    ```

3. Execute o Docker Compose:
    ```sh
    docker-compose up --build
    ```

4. Acesse a aplicação no seu navegador em `http://localhost:3000`.

### Executando os Dockerfiles Individualmente

#### Backend

1. Navegue até o diretório do backend:
    ```sh
    cd backend
    ```

2. Construa a imagem Docker:
    ```sh
    docker build -t todolist-backend .
    ```

3. Execute o contêiner:
    ```sh
    docker run -p 8080:8080 todolist-backend
    ```

#### Frontend

1. Navegue até o diretório do frontend:
    ```sh
    cd frontend
    ```

2. Construa a imagem Docker:
    ```sh
    docker build -t todolist-frontend .
    ```

3. Execute o contêiner:
    ```sh
    docker run -p 3000:80 todolist-frontend
    ```

### Executando com Kubernetes

1. Configure o Minikube (ou outro cluster Kubernetes) e inicie:
    ```sh
    minikube start
    ```

2. Crie os deployments e serviços:
    ```sh
    kubectl apply -f k8s/backend.yaml
    kubectl apply -f k8s/frontend.yaml
    kubectl apply -f k8s/postgres.yaml
    ```

3. Exponha o serviço do frontend:
    ```sh
    minikube service frontend-service
    ```

### Arquitetura da Aplicação

A aplicação é dividida em duas partes principais: frontend e backend. 

- O **frontend** é uma aplicação React que se comunica com o backend para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas.
- O **backend** é uma API RESTful construída com Node.js que se comunica com um banco de dados PostgreSQL para armazenar as tarefas.

### Estrutura do Projeto

```plaintext
├── backend
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── ... (outros arquivos do backend)
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskItem.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── ... (outros arquivos do frontend)
├── docker-compose.yml
└── k8s
    ├── backend.yaml
    ├── frontend.yaml
    └── postgres.yaml
