# Upload a file to B2

Pass in arguments to upload single files to Backblaze B2

```yaml
steps:
- uses: yamatt/backblaze-b2-upload-action@v4
  with:
    key_id: ${{ secrets.B2_KEY_ID }}
    application_key: ${{ secrets.B2_APPLICATION_KEY }}
    bucket_name: ${{ secrets.B2_BUCKET_NAME }}
    file_path: action.yml
    remote_path: test
```
