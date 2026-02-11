import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TabType = 'home' | 'games' | 'squads' | 'players' | 'roster' | 'gold-drop' | 'equipment' | 'load-game' | 'admin';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const playerStats = {
    games: 5,
    avgKills: 16.8,
    avgDeaths: 9.0,
    avgAssists: 10.4,
    avgTab: 10.20,
    totalKills: 84,
    maxKills: 24,
    maxScore: 9555,
    avgKD: 1.86,
    avgKDA: 3.02,
  };

  const navigationItems = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'games', icon: 'Gamepad2', label: 'Игры' },
    { id: 'squads', icon: 'Users', label: 'Отряды' },
    { id: 'players', icon: 'User', label: 'Игроки' },
    { id: 'roster', icon: 'UserPlus', label: 'Состав клана' },
    { id: 'gold-drop', icon: 'Coins', label: 'Голд Дроп' },
    { id: 'equipment', icon: 'Package', label: 'Снаряжение' },
    { id: 'load-game', icon: 'Upload', label: 'Загрузить игру' },
    { id: 'admin', icon: 'Settings', label: 'Админ Панель' },
  ];

  const statCards = [
    { label: 'Игр', value: playerStats.games, color: 'bg-blue-900/50' },
    { label: 'Cp. Убийств', value: playerStats.avgKills, color: 'bg-teal-900/50' },
    { label: 'Cp. Смерти', value: playerStats.avgDeaths, color: 'bg-red-900/50' },
    { label: 'Cp. Помощи', value: playerStats.avgAssists, color: 'bg-amber-900/50' },
    { label: 'Cp. К/Д', value: playerStats.avgKD, color: 'bg-purple-900/50' },
    { label: 'Cp. КДА', value: playerStats.avgKDA, color: 'bg-indigo-900/50' },
    { label: 'Cp. Таб', value: playerStats.avgTab, color: 'bg-slate-700/50' },
    { label: 'Всего убийств', value: playerStats.totalKills, color: 'bg-orange-900/50' },
    { label: 'Макс. Убийства', value: playerStats.maxKills, color: 'bg-pink-900/50' },
    { label: 'Макс. Счет', value: playerStats.maxScore, color: 'bg-cyan-900/50' },
  ];

  const gameHistory = [
    { date: '26-12-2025', map: 'Хвойник', opponent: 'Saints', result: 'win' },
    { date: '25-12-2025', map: 'Хвойник', opponent: 'This is Origin', result: 'win' },
    { date: '20-12-2025', map: 'Низина', opponent: 'Cacla Community', result: 'win' },
    { date: '19-12-2025', map: 'Бердовка (Центр.)', opponent: 'XIII Legion', result: 'loss' },
    { date: '19-12-2025', map: 'Низина', opponent: 'Enforce', result: 'win' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto'] flex">
      <aside className="fixed left-0 top-0 h-full w-48 bg-sidebar border-r border-sidebar-border z-50">
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-sm">Атик</span>
          </div>
        </div>
        <nav className="p-2 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                activeTab === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <Icon name="LogOut" size={18} />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 ml-48">
        <div className="p-6 max-w-[1600px] mx-auto">
          {activeTab === 'home' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-1">Атик</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Роль: Офицер</span>
                    <span>•</span>
                    <span>Discord: @atiiq</span>
                    <span>•</span>
                    <span className="text-primary">Где играет: Бердовка - Домашка, Хвойник - А поинт, Низина - Вражеский свинарник</span>
                    <span>•</span>
                    <span className="text-green-500">Активен</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Назад к списку
                  </Button>
                  <Button>
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
              </div>

              <Card className="p-6 bg-card">
                <h2 className="text-xl font-bold mb-4">Общая статистика</h2>
                <div className="grid grid-cols-5 gap-4">
                  {statCards.map((stat, idx) => (
                    <div key={idx} className={`${stat.color} p-4 rounded-lg border border-border/50`}>
                      <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Список игр</h2>
                  <div className="flex gap-2">
                    <Input placeholder="дд.мм.гггг" className="w-40 bg-muted border-border" />
                    <span className="text-muted-foreground flex items-center">—</span>
                    <Input placeholder="дд.мм.гггг" className="w-40 bg-muted border-border" />
                    <Select defaultValue="all">
                      <SelectTrigger className="w-48 bg-muted border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все противники</SelectItem>
                        <SelectItem value="saints">Saints</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all-maps">
                      <SelectTrigger className="w-40 bg-muted border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-maps">Все карты</SelectItem>
                        <SelectItem value="khvoynik">Хвойник</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button>Сбросить</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  {gameHistory.map((game, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg border border-border/50 hover:border-primary/40 transition-all">
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-muted-foreground">Дата: {game.date}</span>
                        <span className="text-sm font-medium">Карта: {game.map}</span>
                        <span className="text-sm text-muted-foreground">Против: {game.opponent}</span>
                      </div>
                      <Button variant="outline" size="sm">Просмотр</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'players' && (
            <Card className="p-6 bg-card">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Общая статистика игроков</h1>
                <div className="flex gap-4 items-center mb-4">
                  <Input placeholder="Введите имя игрока..." className="max-w-md bg-muted border-border" />
                  <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                    Показать левеющих игроков
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Средние показатели (игры с Таб ≤ 30)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Игрок</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Игр</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. Убийств ↓</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. Смерти</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. Помощи</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. Таб</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. КД</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Cp. КДА</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Игрок 1', games: 5, kills: 21.6, deaths: 12.8, assists: 12.8, tab: 2.60, kd: 1.82, kda: 2.86 },
                        { name: 'Игрок 2', games: 4, kills: 20.8, deaths: 11.0, assists: 13.2, tab: 5.50, kd: 1.90, kda: 3.18 },
                        { name: 'Атик', games: 5, kills: 16.8, deaths: 9.0, assists: 10.4, tab: 10.20, kd: 1.86, kda: 3.02, highlight: true },
                      ].map((player, idx) => (
                        <tr key={idx} className={`border-b border-border/50 hover:bg-muted/50 ${player.highlight ? 'bg-primary/10' : ''}`}>
                          <td className="py-3 px-4 font-medium">{player.name}</td>
                          <td className="py-3 px-4">{player.games}</td>
                          <td className="py-3 px-4">{player.kills}</td>
                          <td className="py-3 px-4">{player.deaths}</td>
                          <td className="py-3 px-4">{player.assists}</td>
                          <td className="py-3 px-4">{player.tab}</td>
                          <td className="py-3 px-4">{player.kd}</td>
                          <td className="py-3 px-4">{player.kda}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'squads' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Планировщик отрядов</h1>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать
                </Button>
              </div>

              {['Хвойник', 'Низина С', 'Низина АВ', 'Бердовка'].map((map, mapIdx) => (
                <Card key={mapIdx} className="p-6 bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">{map}</h2>
                    <div className="flex gap-2">
                      <Input placeholder="Название отряда" className="w-48 bg-muted border-border" />
                      <Button variant="outline" size="sm">
                        <Icon name="Plus" size={14} className="mr-1" />
                        Отряд
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={14} className="mr-1" />
                        Случайно заполнить
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Icon name="Trash2" size={14} className="mr-1" />
                        Очистить отряды
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-4">
                    {['Ганя', 'А поинт', 'Разумный', 'Библиотека', 'Открытый', 'Роум', 'Ранж'].map((squad, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-sm">{squad}</h3>
                          <div className="flex gap-1">
                            <button className="w-6 h-6 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center">
                              <Icon name="Plus" size={12} className="text-primary" />
                            </button>
                            <button className="w-6 h-6 rounded-full bg-destructive/20 hover:bg-destructive/30 flex items-center justify-center">
                              <Icon name="X" size={12} className="text-destructive" />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-card p-2 rounded border border-border/30">
                            <p className="text-xs font-medium">Атик</p>
                            <p className="text-xs text-muted-foreground">Игрок</p>
                            <p className="text-xs text-muted-foreground">в+ Бердовка о очном</p>
                          </div>
                        </div>
                        <button className="w-full mt-2 p-1 rounded bg-destructive/20 hover:bg-destructive/30 flex items-center justify-center">
                          <Icon name="Trash2" size={12} className="text-destructive" />
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'roster' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Управление составом клана</h1>

              <Card className="p-6 bg-card">
                <h2 className="text-lg font-bold mb-4">Добавить игрока</h2>
                <div className="flex gap-3 mb-2">
                  <Input placeholder="Введите ник игрока" className="flex-1 bg-muted border-border" />
                  <Select defaultValue="player">
                    <SelectTrigger className="w-40 bg-muted border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="player">Игрок</SelectItem>
                      <SelectItem value="officer">Офицер</SelectItem>
                      <SelectItem value="leader">Лидер</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Discord ID (опционально)" className="w-64 bg-muted border-border" />
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">В составе клана может быть до 35 игроков (30 основных + 5 запасных). В игре учитываются только табы 1-30.</p>
              </Card>

              <Card className="p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Список игроков (35)</h2>
                  <Button variant="outline">
                    <Icon name="Trash2" size={14} className="mr-2" />
                    Очистить весь состав
                  </Button>
                </div>
                <Input placeholder="Поиск по нику..." className="mb-4 bg-muted border-border" />

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Ник</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Роль</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Discord ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Где играет</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Новичок</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Под кик</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Ливает</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Статус</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Атик', role: 'Лидер', discord: 'atiiq', location: 'Роум', status: 'Активен' },
                        { name: 'Игрок 2', role: 'Полковник', discord: '', location: 'Бердовка - А, Хвойник - В і роум, Низина - В і С', status: 'Активен' },
                      ].map((player, idx) => (
                        <tr key={idx} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 bg-primary flex items-center justify-center rounded text-xs font-bold">
                                <Icon name="MessageSquare" size={14} />
                              </span>
                              <span className="font-medium">{player.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Select defaultValue={player.role.toLowerCase()}>
                              <SelectTrigger className="w-32 bg-muted border-border text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="лидер">Лидер</SelectItem>
                                <SelectItem value="полковник">Полковник</SelectItem>
                                <SelectItem value="офицер">Офицер</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="py-3 px-4 text-sm">{player.discord || '-'}</td>
                          <td className="py-3 px-4 text-sm">{player.location}</td>
                          <td className="py-3 px-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-border" />
                          </td>
                          <td className="py-3 px-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-border" />
                          </td>
                          <td className="py-3 px-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-border" />
                          </td>
                          <td className="py-3 px-4">
                            <Badge className="bg-green-600 text-white">{player.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="text-muted-foreground">Деактивировать</Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground">Добавить Самобуст</Button>
                              <Button variant="destructive" size="sm">Удалить</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab !== 'home' && activeTab !== 'players' && activeTab !== 'squads' && activeTab !== 'roster' && (
            <Card className="p-12 bg-card text-center">
              <Icon name="Construction" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Раздел в разработке</h2>
              <p className="text-muted-foreground">Этот функционал скоро будет доступен</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
