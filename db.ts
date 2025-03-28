let cachedImpl: any; // Cache to avoid multiple imports

const getImpl = async () => {
    if (!cachedImpl) {
        cachedImpl = process.env.NODE_ENV === "production"
            ? await import("./db.prod")
            : await import("./db.dev");
    }
    return cachedImpl;
};

export const getDb = async () => {
    const impl = await getImpl();
    return await impl.getDb();
};

export const migrate = async () => {
    const impl = await getImpl();
    await impl.migrate();
};

