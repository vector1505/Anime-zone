import mongoose, {Schema} from "mongoose";

export enum GenresList {
    ACTION = "ACTION",
    ROMANCE = "ROMANCE",
    COMEDY = "COMEDY",
    DRAMA = "DRAMA",
    HORROR = "HORROR",
    THRILLER = "THRILLER",
    SCI_FI = "SCI-FI",
    SUPERNATURAL = "SUPERNATURAL",
    FANTASY = "FANTASY",
    SLICE_OF_LIFE = "SLICE-OF-LIFE",
    MUSIC = "MUSIC",
    ADVENTURE = "ADVENTURE",
    MYSTERY = "MYSTERY",
    PSYCHOLOGICAL = "PSYCHOLOGICAL",
    ECCHI = "ECCHI",
    MAGICAL_GIRL = "MAGICAL-GIRL",
    IYASHIKEI = "IYASHIKEI",
    MECHA = "MECHA",
}

export enum DemographicsList{
    SHONEN = "SHONEN",
    SHOUJO = "SHOUJO",
    SEINEN = "SEINEN",
    JOSEI = "JOSEI",
    KODOMOMUKE = "KODOMOMUKE",
}

export interface SeriesDocument{
  _id?: mongoose.Types.ObjectId;
  title: string;
  author: string;
  genre: GenresList;
  demographic: DemographicsList;
  episodes: number;
  yearReleased: Date;
  rating: number;
}

const SeriesSchema = new Schema<SeriesDocument>(
    {
        _id:{
            type: Schema.Types.ObjectId,
            auto: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            trim: true,
        },
        genre: {
            type: String,
            enum: Object.values(GenresList),
            required: true,
        },
        demographic: {
            type: String,
            enum: Object.values(DemographicsList),
            required: true,
        },
        episodes: {
            type: Number,
            min: 1,
            default: 12,
        },
        yearReleased: {
            type: Date,
        },
        rating: {
            type: Number,
            min: 0,
            max: 10,
            default: 0,
        },
    },
    { timestamps: true }
);

const SeriesModel = mongoose.model<SeriesDocument>('Series', SeriesSchema);
export default SeriesModel;
