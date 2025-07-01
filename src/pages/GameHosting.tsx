
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Play, Settings } from 'lucide-react';

const GameHosting = () => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('4');
  const [gameCode, setGameCode] = useState('');

  const generateGameCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGameCode(code);
  };

  const handleCreateGame = () => {
    if (!gameName) return;
    generateGameCode();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Game Hosting</h1>
            <p className="text-xl opacity-90">Create or join multiplayer games</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Create Game Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Create New Game
              </CardTitle>
              <CardDescription className="text-white/80">
                Set up a new game session for your friends
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name</Label>
                <Input
                  id="gameName"
                  placeholder="Enter game name..."
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maxPlayers">Max Players</Label>
                <Input
                  id="maxPlayers"
                  type="number"
                  min="2"
                  max="10"
                  value={maxPlayers}
                  onChange={(e) => setMaxPlayers(e.target.value)}
                  className="bg-white/10 border-white/30 text-white"
                />
              </div>

              {gameCode && (
                <div className="p-4 bg-white/20 rounded-lg text-center">
                  <Label className="text-sm opacity-80">Game Code</Label>
                  <div className="text-2xl font-bold tracking-widest">{gameCode}</div>
                  <p className="text-sm opacity-80 mt-1">Share this code with players</p>
                </div>
              )}

              <Button 
                onClick={handleCreateGame}
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
                disabled={!gameName}
              >
                {gameCode ? 'Game Created!' : 'Create Game'}
              </Button>
            </CardContent>
          </Card>

          {/* Join Game Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Existing Game
              </CardTitle>
              <CardDescription className="text-white/80">
                Enter a game code to join a session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="joinCode">Game Code</Label>
                <Input
                  id="joinCode"
                  placeholder="Enter 6-digit code..."
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 text-center text-lg tracking-widest"
                  maxLength={6}
                />
              </div>
              
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30">
                Join Game
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Active Games Section */}
        <Card className="mt-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Active Games
            </CardTitle>
            <CardDescription className="text-white/80">
              Currently running game sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 opacity-60">
              <p>No active games at the moment</p>
              <p className="text-sm mt-2">Create a game to get started!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameHosting;
