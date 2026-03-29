import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // Ora i file sorgenti sono stati spostati
  schema: 'src/lib/graphql/schema.graphql', 
  documents: 'src/lib/graphql/github.graphql',
  
  generates: {
    // 1. SCEMA CODEGEN: Crea tutti i Tipi Typescript (base, operazioni, fragment)
    'src/lib/graphql/schema.generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations' // DEVE stare con typescript per evitare errori nei fragments!
      ],
      config: {
        avoidOptionals: true,
        nonOptionalTypename: true,
      }
    },
    
    // 2. FRAGMENT MATCHER: Crea la mappa di eredità (possibleTypes) per la cache di Apollo
    'src/lib/graphql/fragment-matcher.generated.ts': {
      plugins: ['fragment-matcher'],
      config: {
        apolloClientVersion: 3
      }
    },

    // 3. GITHUB CODEGEN: Crea solo i valori Javascript (es. I Document Node per Apollo)
    'src/lib/graphql/github.generated.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './schema.generated'
      },
      plugins: [
        'typed-document-node' // Genera solo i Node GraphQL tipizzati usando i tipi dal 1° file
      ],
      config: {
        avoidOptionals: true,
        nonOptionalTypename: true,
      }
    }
  }
};

export default config;
