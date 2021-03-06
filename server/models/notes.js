import { Schema, model } from 'mongoose';

const NoteItemSchema = new Schema({
  label: String,
  completed: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
})

const NoteSchema = new Schema({
  title: { type: String, required: true },
  noteItems: {
    type: [NoteItemSchema],
  },
  createdAt: { type: Date, default: Date.now, required: true },
});

export const NoteItem = model('NoteItem', NoteItemSchema);
export const Note = model('Note', NoteSchema);