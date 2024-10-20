module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  verbose: true,
  collectCoverage: true, // Activa la recopilación de cobertura
  collectCoverageFrom: [ // Especifica los archivos para los que deseas recopilar cobertura
    'src/**/*.{js,jsx}', // Todos los archivos JS/JSX en la carpeta src
    '!src/__tests__/**', // Excluye la carpeta de pruebas
  ],
  coverageDirectory: 'coverage', // Carpeta donde se guardará el informe de cobertura
  coverageReporters: ['html', 'text', 'lcov'], // Tipos de informes de cobertura que se generarán
};