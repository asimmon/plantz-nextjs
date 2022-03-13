import { NextApiRequest, NextApiResponse } from "next";
import { UserDocument, UsersCollectionName, toUserModel } from "@features/account/server";

import { ApiGetResponse } from "@core/api";
import { Nullable } from "@core/types";
import { ObjectId } from "mongodb";
import { UserModel } from "@features/account";
import { apiHandler } from "@core/api/handlers/server";
import { isNil } from "@core/utils";
import { queryMongoDb } from "@core/mongoDb/server";

async function handleGet(req: NextApiRequest, res: NextApiResponse<ApiGetResponse<UserModel>>) {
    const { id } = req.query;

    const user = await queryMongoDb(database => {
        return database
            .collection(UsersCollectionName)
            .findOne({ _id: new ObjectId(id as string) }) as Promise<Nullable<UserDocument>>;
    });

    if (isNil(user)) {
        res.status(404).end();
    } else {
        res.status(200).json({
            data: toUserModel(user)
        });
    }
}

export default apiHandler({
    get: handleGet
});
