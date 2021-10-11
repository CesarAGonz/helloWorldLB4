import { HelloloopbackApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: HelloloopbackApplication;
    client: Client;
}
