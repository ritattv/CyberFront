export const withLoggerButton = Button => {
    return {
        functional: true,
        name: "WithLoggerButton",
        render(h, context) {
            return h(
                Button,
                {
                    ...context.data,
                    nativeOn: {
                        click: () => {
                            console.log("clicked");
                        }
                    }
                },
                context.children
            );
        }
    };
};
