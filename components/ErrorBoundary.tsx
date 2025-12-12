"use client";

import React, { Component, ReactNode } from "react";
import { Layout } from "./Layout";
import { RiErrorWarningFill } from "react-icons/ri";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex items-center justify-center bg-linear-to-br from-primary-gray-300 to-primary py-4">
          <Layout className="">
            <section className="space-y-4  w-full rounded-2xl shadow-2xl overflow-hidden bg-primary/10  backdrop-blur-md border p-10 md:p-16 text-center">
              <h1 className="text-6xl inline-flex space-x-4 font-extrabold text-secondary-gray">
                <RiErrorWarningFill /> <span>Error</span>
              </h1>
              <p className="text-lg font-semibold text-secondary-gray">
                Something went wrong.
              </p>
              <p className="text-sm text-secondary-gray max-w-xl mx-auto">
                {this.state.error?.message ||
                  "An unexpected error occurred in the application. It could be a missing semicolon, runtime error, or some other bug."}
              </p>

              <div className="mt-6 text-xs text-secondary-gray">
                Tip: Check your code for syntax errors or refresh the page to
                try again.
              </div>
            </section>
          </Layout>
        </main>
      );
    }

    return this.props.children;
  }
}
