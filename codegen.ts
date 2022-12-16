
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacexdata.herokuapp.com/graphql",
  documents: "**/*.{gql,graphql.tsx}",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: ['typescript-operations','typescript-react-apollo'],
      config: {
        withHooks: true
      },
    }
  }
};

export default config;
