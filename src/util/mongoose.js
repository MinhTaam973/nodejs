module.exports = {
    multipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongooses) => mongooses.toObject());
    },

    mongooseToObject: (mongooses) => {
        return mongooses ? mongooses.toObject() : mongooses;
    },
};
