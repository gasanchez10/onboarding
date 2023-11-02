FROM public.ecr.aws/lambda/nodejs:16
# Copy function code
COPY api-getPushNotifications/index.js package*.json schema.prisma ${LAMBDA_TASK_ROOT}
RUN npm install  
RUN npx prisma generate
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]
