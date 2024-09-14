import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Paper, Fade, Link, Chip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { keyframes } from '@mui/system';

const OntologyAgent = () => {
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

  const ontologyAgentCode = `
class OntologyAgent:
    def __init__(self):
        self.g = Graph()
        self.FINONT = Namespace("http://example.com/finont#")
        self.g.bind("finont", self.FINONT)
        self.load_ontology()
        self.metrics = OntologyMetrics()
        self.pending_updates = Counter()
        self.finance_related_cache = {}

    def load_ontology(self):
        ontology_path = os.getenv('ONTOLOGY_PATH', '/app/data/ontology/financial_ontology.ttl.gz')
        with gzip.open(ontology_path, 'rb') as f:
            self.g.parse(file=f, format="turtle")

    def get_concept(self, term):
        concept = None
        for s, p, o in self.g.triples((None, RDFS.label, Literal(term, lang="en"))):
            concept = str(s)
        self.metrics.update(term, concept)
        return concept

    def get_related_concepts(self, concept_uri):
        related = []
        for s, p, o in self.g.triples((URIRef(concept_uri), None, None)):
            if o != concept_uri and isinstance(o, URIRef):
                label = self.get_label(o)
                if label:
                    related.append((str(o), label))
        return related

    def is_finance_related(self, terms, model_instance):
        uncached_terms = [term for term in terms if term not in self.finance_related_cache]
        
        if not uncached_terms:
            return {term: self.finance_related_cache[term] for term in terms}

        existing_concepts = list(self.g.subjects(RDF.type, RDFS.Class))[:10]
        existing_concepts = [str(self.g.value(c, RDFS.label)) for c in existing_concepts]
        
        prompt = f"""
        Given the following list of financial concepts:
        {', '.join(existing_concepts)}

        For each of the following terms, respond with 'Yes' if it's related to finance, investment, or wealth management, and 'No' if it's not. Provide the answers in a comma-separated list in the same order as the terms.

        Terms: {', '.join(uncached_terms)}
        """

        response = model_instance.generate_response(prompt, "classification", {})
        
        responses = response['text'].strip().split(',')
        for term, resp in zip(uncached_terms, responses):
            self.finance_related_cache[term] = (resp.strip().lower() == 'yes')

        return {term: self.finance_related_cache[term] for term in terms}

    def update_concepts(self, related_concepts):
        client = get_mongo_client()
        db = client['researchmongodb']
        pending_updates_collection = db['pending_ontology_updates']
        
        new_concepts_added = 0
        for concept in related_concepts:
            pending_updates_collection.update_one(
                {"concept": concept},
                {"$inc": {"frequency": 1}, "$set": {"lastSeen": datetime.utcnow()}},
                upsert=True
            )
            new_concepts_added += 1

        return new_concepts_added

    def add_concepts_to_ontology(self, concepts_to_add):
        new_concepts_added = 0
        for concept in concepts_to_add:
            concept_uri = URIRef(self.FINONT[concept.replace(" ", "_")])
            if (concept_uri, RDF.type, RDFS.Class) not in self.g:
                self.g.add((concept_uri, RDF.type, RDFS.Class))
                self.g.add((concept_uri, RDFS.label, Literal(concept, lang="en")))
                self.g.add((concept_uri, self.FINONT.addedDate, Literal(datetime.utcnow())))
                new_concepts_added += 1

        if new_concepts_added > 0:
            self.save_ontology()

        return new_concepts_added

ontology_agent = OntologyAgent()

def apply_ontology(text):
    words = text.split()
    annotated_words = []
    for word in words:
        concept = ontology_agent.get_concept(word.lower())
        if concept:
            annotated_words.append(f"{word} [{concept}]")
        else:
            annotated_words.append(word)
    return " ".join(annotated_words)
`;

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Helmet>
            <title>Research AI's Ontology Agent</title>
            <meta name="description" content="Exploring the Ontology Agent in Research AI, a state-of-the-art AI system for financial research analysis developed by Deep Vertical AI." />
            <meta property="og:title" content="Research AI: Ontology Agent for Advanced Financial Analysis" />
            <meta property="og:description" content="Discover how the Ontology Agent in Research AI is transforming financial research analysis with intelligent concept management." />
            <meta property="og:url" content="https://deepvertical.ai/insights/ontologyagent" />
            <meta property="og:image" content="https://deepvertical.ai/static/images/insight8.gif" />
          </Helmet>

          {/* Introduction Section */}
          <Box
            sx={{
              width: '100%',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("/static/images/ontology-agent-bg.png") no-repeat center',
              backgroundSize: 'cover',
              color: 'common.white',
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box sx={{ maxWidth: '1200px', textAlign: 'left', px: { xs: 2, md: 4 } }}>
              <Fade in timeout={500}>
                <Chip
                  label="Last Updated: 14 September 2024"
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
                  Ontology Agent: Enhancing Research AI with Intelligent Concept Management
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
                  Exploring the cutting-edge Ontology Agent in Research AI, a state-of-the-art system for intelligent concept management in financial research analysis.
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
              {/* Ontology Agent Overview */}
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
                      Ontology Agent: A Deep Dive
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
                      The Ontology Agent is a crucial component of Research AI, acting as an intelligent intermediary between raw text data and AI models. It provides context, structure, and domain-specific knowledge to enhance the analysis process of financial information.
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
                      By maintaining a comprehensive, hierarchical structure of financial concepts and their relationships, the Ontology Agent translates raw text into a more structured, semantically rich representation. This enhanced input significantly improves the contextual understanding and accuracy of AI models in financial analysis tasks.
                    </Typography>
                  </Paper>
                </Box>
              </Fade>

              {/* Key Features */}
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
                      Key Features of the Ontology Agent
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
                      The Ontology Agent incorporates several advanced features:
                    </Typography>
                    <ul>
                      <li>Concept Mapping: Identifies and links terms to relevant concepts in the ontology</li>
                      <li>Related Concept Retrieval: Expands context by retrieving related concepts</li>
                      <li>Dynamic Updates: Evolves over time, incorporating new financial concepts</li>
                      <li>Metrics and Logging: Tracks performance metrics for continuous improvement</li>
                      <li>Persistence and Recovery: Efficient storage and loading of the ontology</li>
                      <li>Human-in-the-Loop Updates: Allows expert review of potential new concepts</li>
                    </ul>
                  </Paper>
                </Box>
              </Fade>

              {/* Technical Implementation */}
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
                      The Ontology Agent is implemented using RDFLib for ontology management and MongoDB for storing pending updates. Here's a simplified code example illustrating its core structure:
                    </Typography>
                    <Paper elevation={3} style={{ padding: '10px', marginBottom: '20px' }}>
                      <SyntaxHighlighter language="python" style={solarizedlight}>
                        {ontologyAgentCode}
                      </SyntaxHighlighter>
                    </Paper>
                  </Paper>
                </Box>
              </Fade>

              {/* Human-in-the-Loop Feature */}
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
                      Human-in-the-Loop Update Feature
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
                      The Human-in-the-Loop (HITL) update feature is a key innovation in the Ontology Agent, serving several important purposes:
                    </Typography>
                    <ul>
                      <li>User Training: Involves experts in reviewing and approving new concepts</li>
                      <li>Ontology Refinement: Ensures only relevant and accurate concepts are added</li>
                      <li>Error Prevention: Acts as a safeguard against potential AI biases or errors</li>
                      <li>Customization: Allows fine-tuning of the ontology to specific organizational needs</li>
                      <li>Compliance: Ensures ontology updates align with relevant guidelines and regulations</li>
                    </ul>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mt: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      This approach balances AI efficiency with human expertise, ensuring controlled and validated expansion of the knowledge base.
                    </Typography>
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
                      The Ontology Agent, with its intelligent concept management and HITL update feature, is a critical component of Research AI. It significantly enhances the system's ability to understand and analyze complex financial information while providing a mechanism for controlled evolution of its knowledge base. This combination of AI efficiency and human expertise positions Research AI at the forefront of intelligent financial analysis tools.
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
                  Contact us to learn more about the Ontology Agent in Research AI{' '}
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

export default OntologyAgent;