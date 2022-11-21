import { createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

type Project = {
    image_url: string;
    title: string;
    description: string;
    link_git: string;
    link_demo: string;
};

export function makeServer() {
    const server = createServer({
        models: {
            project: Model.extend<Partial<Project>>({}),
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
        },

        seeds(server) {
            server.createList('project', 6);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 3000;

            this.get('/', function (schema) {

                const total = schema.all(`project`).length;

                const projects = this.serialize(schema.all('project')).projects.slice();

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { projects },
                )
            });

            this.post('/');

            this.namespace = '';
            this.passthrough();
        },
    });

    return server;
}