import {model, Schema, Document} from "mongoose";

export const DOCUMENT_NAME = 'Program';
export const COLLECTION_NAME = 'programs';

export interface Program extends Document{
    programFullName: string;
    programShortName: string;
    instituteShortName: string;
    sem1: string[];
    sem2: string[];
    sem3: string[];
    sem4: string[];
    sem5: string[];
    sem6: string[];
    sem7: string[];
    sem8: string[];
    sem9?: string[];
    sem10?: string[];
}

const schema = new Schema(
    {
        programFullName:{
            type: Schema.Types.String,
            required: true,
            trim: true,
            maxLength: 50
        },
        programShortName:{
            type: Schema.Types.String,
            required: true,
            trim: true,
            maxLength: 50
        },
        instituteShortName:{
            type: Schema.Types.String,
            required: true,
            trim: true,
            maxLength: 50
        },
        sem1:[{
            type: Schema.Types.String,
            required: true
        }],
        sem2:[{
            type: Schema.Types.String,
            required: true
        }],
        sem3:[{
            type: Schema.Types.String,
            required: true
        }],
        sem4:[{
            type: Schema.Types.String,
            required: true
        }],
        sem5:[{
            type: Schema.Types.String,
            required: true
        }],
        sem6:[{
            type: Schema.Types.String,
            required: true
        }],
        sem7:[{
            type: Schema.Types.String,
            required: true
        }],
        sem8:[{
            type: Schema.Types.String,
            required: true
        }],
        sem9:[{
            type: Schema.Types.String,
            required: false
        }],
        sem10:[{
            type: Schema.Types.String,
            required: false
        }],
    },
    {
        versionKey: false
    }
)

export const ProgramModel = model<Program>(DOCUMENT_NAME, schema, COLLECTION_NAME);