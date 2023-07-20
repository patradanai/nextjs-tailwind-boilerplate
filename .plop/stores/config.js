const componentsPath = '../src/'

module.exports = {
    description: 'Generate a new React store',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Store name:',
            validate: (value) => {
                if (!value) {
                    return 'Store name is required'
                }
                return true
            },
        },
    ],
    actions: (data) => {
        let actions = [
            // Store
            {
                type: 'add',
                path: `${componentsPath}/stores/slices/create{{properCase name}}Slice.ts`,
                templateFile: './stores/createSlice.ts.hbs',
            },
            // Modify Type
            {
                type: 'modify',
                pattern: '/(\/\/ COMPONENT IMPORTS)/g',
                path: `${componentsPath}/stores/index.ts`,
                template: 'import { create{{properCase name}}Slice, I{{properCase name}} } from \'./slices/create{{properCase name}}Slice\'\n$1',
            },
            // // Modify Stores
            // {
            //     type: 'modify',
            //     pattern: '',
            //     path: `${componentsPath}/stores/index.ts`,
            //     templateFile: './store/{{type}}.tsx.hbs',
            // },
        ]
        return actions
    },
}
