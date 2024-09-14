import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Paper, Fade, Link, Chip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { keyframes } from '@mui/system';

const AIResearchAnalysis = () => {
  const neonGlowAnimation = keyframes`
    0% {
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
  `;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const codeExample = `
class ResearchAIModel(AIModelInterface):
    def __init__(self):
        self.models = {
            'gpt-4o': GPT4Model(),
            'gpt-4-turbo': GPT4TurboModel(),
            'gpt-3.5-finetuned': FineTunedGPT35TurboModel()
        }

    def generate_response(self, prompt, prompt_type, parameters):
        model = self.models[parameters['model']]
        return model.generate_response(prompt, prompt_type, parameters)

    def analyze_research(self, pdfs, user_input):
        extracted_texts = self.extract_text_from_pdfs(pdfs)
        workflow_result = self.process_pdfs_workflow(extracted_texts, user_input)
        
        if workflow_result['chunked']:
            responses = []
            for chunk in workflow_result['full_prompt']:
                response = self.generate_response(chunk, "Research Analysis", parameters)
                responses.append(response)
            return self.aggregate_chunk_responses(responses)
        else:
            return self.generate_response(workflow_result['full_prompt'], "Research Analysis", parameters)

    def extract_text_from_pdfs(self, pdfs):
        # Implementation for text extraction from PDFs
        pass

    def process_pdfs_workflow(self, extracted_texts, user_input):
        # Implementation for processing PDFs and applying ontology
        pass

    def aggregate_chunk_responses(self, responses):
        # Implementation for aggregating responses from multiple chunks
        pass
`;

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Helmet>
            <title>Research AI: Advanced AI-Powered Financial Analysis</title>
            <meta name="description" content="Exploring the cutting-edge capabilities of Research AI, a state-of-the-art AI system for financial research analysis developed by Deep Vertical AI." />
            <meta property="og:title" content="Research AI: Advanced AI-Powered Financial Analysis" />
            <meta property="og:description" content="Discover how Research AI is revolutionizing financial research analysis with multi-LLM approaches and AI agents." />
            <meta property="og:url" content="https://deepvertical.ai/insights/researchai" />
            <meta property="og:image" content="https://deepvertical.ai/static/images/insight7.gif" />
          </Helmet>

          {/* Introduction Section */}
          <Box
            sx={{
              width: '100%',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("/static/images/ai-research-analysis.png") no-repeat center',
              backgroundSize: 'cover',
              color: 'common.white',
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box sx={{ maxWidth: '1200px', textAlign: 'left', px: { xs: 2, md: 4 } }}>
              <Fade in timeout={500}>
                <Chip
                  label="Last Updated: 28 July 2024"
                  sx={{
                    mb: 4,
                    px: 2,
                    py: 1,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(45deg, #00ffff, #7fffd4)',
                    color: '#000',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                  }}
                />
              </Fade>
              <Fade in timeout={1000}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    background: 'linear-gradient(45deg, #00ffff, #7fffd4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Research AI: Transforming Financial Analysis
                </Typography>
              </Fade>
              <Fade in timeout={1500}>
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    mb: 4,
                    maxWidth: '1200px',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  Exploring the cutting-edge capabilities of Research AI, a state-of-the-art system leveraging multiple LLMs and AI agents for advanced financial research analysis.
                </Typography>
              </Fade>
            </Box>
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #000000, #1a237e)',
              color: 'common.white',
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto',
                mb: { xs: 4, md: 8 },
              }}
            >
              {/* Research AI Overview */}
              <Fade in timeout={2000}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Research AI: A Deep Dive
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Research AI, developed by Deep Vertical AI, represents a cutting-edge approach to financial research analysis. It leverages multiple state-of-the-art language models and AI agents, each optimized for specific tasks within a comprehensive research workflow.
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      A key innovation of Research AI is its integration of intermediary structures, such as domain-specific ontologies, which bridge general language models with specialized financial knowledge. This fusion enables nuanced, context-aware analysis of complex sell-side research reports, extracting subtle insights and trends that might be missed by traditional methods or generic AI models.
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      The system's architecture is designed to handle large volumes of financial data efficiently, incorporating advanced techniques such as token management and chunking. This allows Research AI to process documents that exceed the token limits of individual models, ensuring comprehensive analysis of extensive research reports.
                    </Typography>
                  </Paper>
                </Box>
              </Fade>

              {/* Technical Details */}
              <Fade in timeout={2500}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Technical Implementation
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Research AI's architecture is built on a multi-model approach, allowing it to leverage the strengths of different AI models for various tasks. The system includes:
                    </Typography>
                    <ul>
                      <li>PDF text extraction and preprocessing</li>
                      <li>Ontology application for enhanced context understanding</li>
                      <li>Dynamic model selection based on task requirements</li>
                      <li>Chunking and token management for handling large numbers of documents</li>
                      <li>Aggregation of responses from multiple AI models or document chunks</li>
                    </ul>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        mt: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Here's a simplified code example illustrating the core structure of Research AI, citing OpenAI models for the purpose of illustration:
                    </Typography>
                    <Paper elevation={3} style={{ padding: '10px', marginBottom: '20px' }}>
                      <SyntaxHighlighter language="python" style={solarizedlight}>
                        {codeExample}
                      </SyntaxHighlighter>
                    </Paper>
                  </Paper>
                </Box>
              </Fade>

              {/* Key Features and Advantages */}
              <Fade in timeout={3000}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Key Features and Advantages
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Research AI offers several advanced features that set it apart:
                    </Typography>
                    <ul>
                      <li>Multi-model AI approach for task-specific optimization and mitigation of model dependency risks</li>
                      <li>Integration of domain-specific ontologies for enhanced context understanding</li>
                      <li>Advanced document processing with chunking and token management</li>
                      <li>Multi-document analysis and cross-report trend identification</li>
                      <li>Complex query handling for nuanced financial insights</li>
                      <li>Secure, in-house deployment options for data privacy and regulatory compliance</li>
                      <li>Seamless integration with existing financial research workflows</li>
                    </ul>
                  </Paper>
                </Box>
              </Fade>

              {/* Industry Impact */}
              <Fade in timeout={3500}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Industry Impact and Future Outlook
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      The financial industry is witnessing a significant shift towards AI-powered research analysis tools. For instance, JPMorgan has introduced its LLM Suite, a generative AI product designed to assist with financial research tasks. <Link href="https://www.ft.com/content/96dfec5f-4d5f-4c3e-8f66-ebd0dfc8392d" target="_blank" rel="noopener noreferrer" sx={{ color: '#00ffff' }}>According to the Financial Times</Link>, this tool is accessible to about 50,000 employees and is described as a "research analyst that can offer information, solutions and advice on a topic."
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Research AI, with its advanced capabilities, is at the forefront of this transformation. As AI continues to evolve, we can expect even more sophisticated applications in financial research, leading to:
                    </Typography>
                    <ul>
                      <li>More efficient and comprehensive market analysis</li>
                      <li>Faster identification of investment opportunities and risks</li>
                      <li>Enhanced decision-making processes backed by AI-driven insights</li>
                      <li>Democratization of high-quality financial analysis</li>
                      <li>Potential for new research methodologies and financial products</li>
                    </ul>
                  </Paper>
                </Box>
              </Fade>

              {/* Conclusion */}
              <Fade in timeout={4000}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Conclusion
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Research AI represents a significant leap forward in AI-powered financial analysis. By leveraging multiple LLMs, AI agents, and advanced techniques like ontology integration and efficient document processing, it offers a comprehensive solution for analyzing complex financial research. As the financial industry continues to embrace AI technologies, systems like Research AI are poised to play a crucial role in shaping the future of investment strategies and market analysis.
                    </Typography>
                  </Paper>
                </Box>
              </Fade>

              {/* References */}
              <Fade in timeout={4500}>
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 4 },
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      References
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      1. JPMorgan pitches in-house chatbot as AI-based research analyst. Financial Times. <Link href="https://www.ft.com/content/96dfec5f-4d5f-4c3e-8f66-ebd0dfc8392d" target="_blank" rel="noopener noreferrer" sx={{ color: '#00ffff' }}>https://www.ft.com/content/96dfec5f-4d5f-4c3e-8f66-ebd0dfc8392d</Link>
                    </Typography>
                  </Paper>
                </Box>
              </Fade>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 4,
                }}
              >
                <Link
                  href="mailto:john@deepvertical.ai"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#00ffff',
                    textDecoration: 'none',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    '&:hover': {
                      color: '#7fffd4',
                    },
                  }}
                >
                  Contact us to learn more about Research AI and advanced financial analysis{' '}
                  <Box
                    component="span"
                    sx={{
                      ml: 1,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    →
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AIResearchAnalysis;