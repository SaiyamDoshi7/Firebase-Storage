import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      formData.append("upload_preset", "ml_default");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dhymr2x8y/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      return {
        name: file.name,
        type: file.type,
        size: file.size,
        url: data.secure_url,
        public_id: data.public_id,
        date: new Date().toLocaleString(),
      };

    } catch (err) {
      return rejectWithValue("Upload failed");
    }
  }
);

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (file) => {
    return file.url;
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.list.unshift(action.payload); // 👈 new on top
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.list = state.list.filter(f => f.url !== action.payload);
      });
  },
});

export default fileSlice.reducer;