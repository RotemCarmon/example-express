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
      key:'/c/Users/tetch/Desktop/Dev/SSH_KEYS/pharma-soft-site-deploy/site-deploy.pem',
      user: 'site-admin',
      host: '192.117.146.217',
      ref: 'origin/master',
      repo: 'git@github.com:RotemCarmon/example-express.git',
      path: '/home/site-admin/example-express',
      // "pre-setup": "sudo -S admin rm -rf /home/site-admin/example-express",
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production && pm2 save'
    }
  }
};
