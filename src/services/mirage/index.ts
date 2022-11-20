import { createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

type Project = {
    image_url: string;
    title: string;
    description: string;
    link_git: string;
    link_demo: string;
};

type User = {
    name: string;
    avatar: string;
    bio: string;
};

export function makeServer() {
    const server = createServer({
        models: {
            project: Model.extend<Partial<Project>>({}),
            user: Model.extend<Partial<User>>({}),
        },

        factories: {
            project: Factory.extend({
                image_url() {
                    const fakerImage = faker.image.abstract(640, 480, true); 
                    return fakerImage != null
                        ? fakerImage
                        : 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                },
                title(i: number) {
                    return `Project ${i + 1}`; // Project 1,2,3,4...
                },
                description() {
                    return faker.lorem.text();
                },
                link_git() {
                    return 'https://github.com/GuilhermeMota20';
                },
                link_demo() {
                    return 'https://github.com/GuilhermeMota20';
                }
            }),
            user: Factory.extend({
                name() {
                    return 'Guilherme Mota';
                },
                avatar() {
                    return'https://avatars.githubusercontent.com/u/70167159?v=4'
                },
                bio() {
                    return 'Frontend Developer'
                }
            }),
        },

        seeds(server) {
            server.createList('project', 6);
            server.create('user');
        },

        routes() {
            this.namespace = 'api';
            this.timing = 3000;

            this.get('/', function (schema) {

                const total = schema.all(`project`).length;

                const projects = this.serialize(schema.all('project')).projects;
                const users = this.serialize(schema.all('user')).users;

                // const teste = Object.assign({}, users);
                const teste = users[0];
                // const teste = Object.fromEntries(users);

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { projects, users, teste },
                )
            });

            this.post('/');

            this.namespace = '';
            this.passthrough();
        },
    });

    return server;
}