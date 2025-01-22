# Upload a file to B2

Pass in arguments to upload single files to Backblaze B2.

You need a [B2 account with Backblaze](https://www.backblaze.com) and [application keys](https://www.backblaze.com/docs/cloud-storage-application-keys#creating-and-using-app-keys).

## Example

Add this to your workflow:

```yaml
jobs:
  upload:
    runs-on: ubuntu-latest
    name: Upload file
    steps:
      - uses: yamatt/backblaze-b2-upload-action@v7
        with:
          key_id: ${{ secrets.B2_KEY_ID }}
          application_key: ${{ secrets.B2_APPLICATION_KEY }}
          bucket_name: ${{ secrets.B2_BUCKET_NAME }}
          file_path: big-file.tgz
          remote_path: test
```

## Arguments

| Name              | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| `key_id`          | Yes      | The application key ID from Backblaze                        |
| `application_key` | Yes      | The application key secret from Backblaze                    |
| `bucket_name`     | Yes      | The name of the bucket in B2                                 |
| `file_path`       | Yes      | The path to the file within your workflow you want to upload |
| `remote_path`     | Yes      | The name and path of the file when uploaded to B2            |
