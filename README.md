# simple_cloudTasks

## 実行方法

cloudbuild.yamlのPROJECT_ID、IMAGE_NAME、SERVICE_NAMEを自分のプロジェクトのGCPプロジェクトID、Container Registry 内のイメージ名、Cloud Runサービス名にそれぞれ書き換え、index.ts内のFUNCTION_URL、GOOGLE_CLOUD_PROJECTを追加した後、以下を実行。

```
npm i
npm run deploy
```

デプロイし終わった後、${FUNCTION_URL}/enqueue-taskを叩くことで、cloudTasksにタスクがエンキューされ、タスクハンドラーが処理を進める