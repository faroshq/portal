import { V1alpha1Workspace } from "@/api/faros";
import * as k8s from 'kubernetes-client-typescript-fetch';
import * as k8sfaros from "@/api/k8s/config";
import idsrvAuth from '../oauthclient/idsrvAuth';

export function getKubeConfig(workspace: V1alpha1Workspace) {
    const kc = new k8sfaros.KubeConfig();
    const name = workspace.metadata?.name as string
        const cluster = {
            name: name,
            server: workspace.status?.workspaceURL as string,
            skipTLSVerify: true, // TODO: remove this
        };

        const user = {
            name: name,
            token: idsrvAuth.accessToken,
        };

        const context = {
            name: user.name,
            user: user.name,
            cluster: cluster.name,
        };
        kc.loadFromOptions({
            clusters: [cluster],
            users: [user],
            contexts: [context],
            currentContext: context.name,
        });
        return kc;
}
