module.exports = {
  apps: [{
    name:'express-example',
    script: 'npm start',
    watch: '.',
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '192.117.146.217',
      ref: 'origin/master',
      repo: 'git@github.com:RotemCarmon/example-express.git',
      path: '/var/app/repos',
      "pre-setup": "rm -rf /var/app/repos",
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production && pm2 save'
    }
  }
};
