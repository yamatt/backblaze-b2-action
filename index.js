const core = require('@actions/core');
const childProcess = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const os = require('os');
const stream = require('stream');

const {path, url, ex} = {
  Linux: {path: '/usr/bin/b2', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/linux/b2', ex: true},
  Darwin: {path: '/usr/local/bin/b2', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/osx/b2', ex: true},
  Windows_NT: {path: 'C:\\Windows\\system32\\b2.exe', url: 'https://f000.backblazeb2.com/file/backblazefiles/b2/cli/windows/b2.exe'},
}[os.type()];

const exec_path = ex ? `/tmp/${crypto.randomBytes(16).toString('hex')}` : path;

https.get(url, res => {
  stream.pipeline(
    res,
    fs.createWriteStream(exec_path),
    err => {
      if (err) {
        console.error(err);
      } else if (ex) {
        fs.chmodSync(outPath, 0o555);
        childProcess.execFileSync(exec_path, ["authorize-account", core.getInput('key_id'), core.getInput('application_key')]);
        childProcess.execFileSync(exec_path, ['upload-file', core.getInput('bucket_name'), core.getInput('file_path'), core.getInput('remote_path')]);
      }
    }
  );
});
