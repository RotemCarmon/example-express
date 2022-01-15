module.exports = {
  apps: [{
    script: 'server.js',
    watch: '.',
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'root',
      host: '192.117.146.217',
      ref: 'origin/master',
      repo: 'git@github.com:RotemCarmon/example-express.git',
      path: 'var/app/repos',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production && pm2 save',
      'pre-setup': ''
    }
  }
};
