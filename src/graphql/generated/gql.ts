/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query getLaunches {\n  launches {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n      video_link\n    }\n  }\n}": types.GetLaunchesDocument,
    "query getLaunch($id: String!) {\n  launch(id: $id) {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    details\n    links {\n      flickr_images\n    }\n  }\n}": types.GetLaunchDocument,
};

export function graphql(source: "query getLaunches {\n  launches {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n      video_link\n    }\n  }\n}"): (typeof documents)["query getLaunches {\n  launches {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n      video_link\n    }\n  }\n}"];
export function graphql(source: "query getLaunch($id: String!) {\n  launch(id: $id) {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    details\n    links {\n      flickr_images\n    }\n  }\n}"): (typeof documents)["query getLaunch($id: String!) {\n  launch(id: $id) {\n    launch_success\n    launch_year\n    mission_name\n    rocket {\n      rocket_name\n    }\n    details\n    links {\n      flickr_images\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;