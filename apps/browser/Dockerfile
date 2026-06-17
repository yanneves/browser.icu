FROM mcr.microsoft.com/playwright:v1.61.0
LABEL description="Playwright Server Container"

# ==============================================================================
# Environment Configuration
# ==============================================================================
# Set port for the Playwright server (:3000 by default)
ENV PORT=3000
EXPOSE ${PORT}

# ==============================================================================
# Workspace Setup
# ==============================================================================
# Switch to the built-in non-root user
USER pwuser
WORKDIR /home/pwuser

# ==============================================================================
# Execution
# ==============================================================================
# Start the Playwright server:
# - 'sh -c' evaluates the ${PORT} environment variable at runtime.
# - 'exec' replaces the shell process with npx, allowing the server to 
#   properly receive stop signals (like Ctrl+C or docker stop).
CMD ["sh", "-c", "exec npx -y playwright run-server --port ${PORT} --host 0.0.0.0"]
