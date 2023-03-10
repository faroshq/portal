import {
    Cluster,
    Context,
    exportCluster,
    exportContext,
    exportUser,
    User,
} from './config_types';


export class KubeConfig {
       /**
     * The list of all known clusters
     */
    public 'clusters': Cluster[];

    /**
     * The list of all known users
     */
    public 'users': User[];

    /**
     * The list of all known contexts
     */
    public 'contexts': Context[];

    /**
     * The name of the current context
     */
    public 'currentContext': string;

    constructor() {
        this.contexts = [];
        this.clusters = [];
        this.users = [];
    }

    public getContexts(): Context[] {
        return this.contexts;
    }

    public getClusters(): Cluster[] {
        return this.clusters;
    }

    public getCluster(name: string): Cluster | null {
        return this.clusters.find((c) => c.name === name) || null;
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getCurrentContext(): string {
        return this.currentContext;
    }

    public setCurrentContext(context: string): void {
        this.currentContext = context;
    }

    public loadFromOptions(options: {
        clusters: Cluster[];
        contexts: Context[];
        currentContext: Context['name'];
        users: User[];
    }): void {
        this.clusters = options.clusters;
        this.contexts = options.contexts;
        this.users = options.users;
        this.currentContext = options.currentContext;
    }

    public loadFromClusterAndUser(cluster: Cluster, user: User): void {
        this.clusters = [cluster];
        this.users = [user];
        this.currentContext = 'loaded-context';
        this.contexts = [
            {
                cluster: cluster.name,
                user: user.name,
                name: this.currentContext,
            } as Context,
        ];
    }

    public mergeConfig(config: KubeConfig, preserveContext: boolean): void {
        if (!preserveContext) {
            this.currentContext = config.currentContext;
        }
        config.clusters.forEach((cluster: Cluster) => {
            this.addCluster(cluster);
        });
        config.users.forEach((user: User) => {
            this.addUser(user);
        });
        config.contexts.forEach((ctx: Context) => {
            this.addContext(ctx);
        });
    }

    public addCluster(cluster: Cluster): void {
        if (!this.clusters) {
            this.clusters = [];
        }
        this.clusters.forEach((c: Cluster, ix: number) => {
            if (c.name === cluster.name) {
                throw new Error(`Duplicate cluster: ${c.name}`);
            }
        });
        this.clusters.push(cluster);
    }

    public addUser(user: User): void {
        if (!this.users) {
            this.users = [];
        }
        this.users.forEach((c: User, ix: number) => {
            if (c.name === user.name) {
                throw new Error(`Duplicate user: ${c.name}`);
            }
        });
        this.users.push(user);
    }

    public addContext(ctx: Context): void {
        if (!this.contexts) {
            this.contexts = [];
        }
        this.contexts.forEach((c: Context, ix: number) => {
            if (c.name === ctx.name) {
                throw new Error(`Duplicate context: ${c.name}`);
            }
        });
        this.contexts.push(ctx);
    }

    public exportConfig(): string {
        const configObj = {
            apiVersion: 'v1',
            kind: 'Config',
            clusters: this.clusters.map(exportCluster),
            users: this.users.map(exportUser),
            contexts: this.contexts.map(exportContext),
            preferences: {},
            'current-context': this.getCurrentContext(),
        };

        return JSON.stringify(configObj);
    }
}
