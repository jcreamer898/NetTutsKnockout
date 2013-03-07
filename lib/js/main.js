require.config({
    paths: {
        ko: "vendor/knockout-min",
        postal: "vendor/postal",
        underscore: "vendor/underscore-min",
        amplify: "vendor/amplify"
    },
    shim: {
        ko: {
            exports: "ko"
        },
        underscore: {
            exports: "_"
        },
        amplify: {
            exports: "amplify"
        }
    },
    baseUrl: "/js"
});