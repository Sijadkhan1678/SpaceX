
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacexdata.herokuapp.com/graphql",
  documents: "**/*.{gql,graphql}",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
